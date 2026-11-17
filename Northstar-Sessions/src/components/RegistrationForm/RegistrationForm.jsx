import React, { useLayoutEffect, useRef, useState } from 'react';
import copy from '../../page-copy.json';
import styles from './RegistrationForm.module.css';

const storageKey = 'northstar.registration.v1';
const [rolePlaceholder, ...roles] = copy.roles;
const empty = {
  fullName: '', email: '', role: '', consent: false,
};
const storageError = 'Your browser could not save this registration. Please allow site storage and try again.';

function validate({
  fullName, email, role, consent,
}) {
  const errors = {};
  if (fullName.length < 2 || fullName.length > 80) {
    errors.fullName = 'Enter your full name (2–80 characters).';
  }
  if (email.length > 254 || !/^[^@\s]+@[^@\s.]+(?:\.[^@\s.]+)+$/u.test(email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!roles.includes(role)) errors.role = 'Choose your role.';
  if (consent !== true) errors.consent = 'Confirm storage on this device to continue.';
  return errors;
}

function loadRegistration() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    const record = JSON.parse(raw);
    if (record && typeof record.fullName === 'string' && typeof record.email === 'string'
      && typeof record.savedAt === 'string' && Number.isFinite(Date.parse(record.savedAt))
      && !Object.keys(validate(record)).length) {
      return record;
    }
  } catch (error) {
    // A blocked store or unreadable record still allows use of the form.
  }
  return null;
}

export default function RegistrationForm() {
  const [saved, setSaved] = useState(loadRegistration);
  const [details, setDetails] = useState(empty);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');
  const [failure, setFailure] = useState('');
  const [focusRequest, setFocusRequest] = useState(null);
  const form = useRef(null);
  const success = useRef(null);
  const showSuccess = saved && !editing;

  useLayoutEffect(() => {
    if (!focusRequest) return;
    if (focusRequest.target === 'success') success.current.focus();
    else form.current.elements.namedItem(focusRequest.target).focus();
  }, [focusRequest]);

  function change(event) {
    const {
      name, value, checked, type,
    } = event.target;
    setDetails((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
  }

  function submit(event) {
    event.preventDefault();
    setNotice('');
    setFailure('');
    const record = {
      ...details,
      fullName: details.fullName.trim(),
      email: details.email.trim().toLowerCase(),
      savedAt: new Date().toISOString(),
    };
    const invalid = validate(record);
    setErrors(invalid);
    const [firstInvalid] = Object.keys(invalid);
    if (firstInvalid) {
      setFocusRequest({ target: firstInvalid });
      return;
    }
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(record));
      setSaved(record);
      setEditing(false);
      setNotice(copy.success_body);
      setFocusRequest({ target: 'success' });
    } catch (error) {
      setFailure(storageError);
    }
  }

  function update() {
    const {
      fullName, email, role, consent,
    } = saved;
    setDetails({
      fullName, email, role, consent,
    });
    setEditing(true);
    setNotice('');
    setFailure('');
    setFocusRequest({ target: 'fullName' });
  }

  function remove() {
    try {
      window.localStorage.removeItem(storageKey);
      setSaved(null);
      setDetails(empty);
      setFailure('');
      setNotice(copy.removed);
      setFocusRequest({ target: 'fullName' });
    } catch (error) {
      setFailure('Your browser could not remove this registration. Please allow site storage and try again.');
    }
  }

  function fieldError(name) {
    return errors[name] && <p className={styles.error} id={`error-${name}`}>{errors[name]}</p>;
  }

  return (
    <section className={styles.section} id="register" aria-labelledby="register-title">
      <div className={styles.intro}>
        <h2 id="register-title">{copy.register_heading}</h2>
        <p>{copy.register_intro}</p>
      </div>
      <div className={styles.card}>
        {showSuccess ? (
          <div className={styles.success}>
            <p className={styles.state}>SUCCESS</p>
            <h3 ref={success} tabIndex={-1}>{copy.success_title}</h3>
            <p className={styles.successBody}>{copy.success_body}</p>
            <div className={styles.actions}>
              <button type="button" onClick={update}>{copy.update}</button>
              <button type="button" className={styles.remove} onClick={remove}>{copy.remove}</button>
            </div>
          </div>
        ) : (
          <form ref={form} onSubmit={submit} noValidate aria-labelledby="form-title">
            <h3 id="form-title">{copy.form_title}</h3>
            {notice === copy.removed && <p className={styles.removed}>{notice}</p>}
            <div className={styles.fields}>
              <div>
                <label htmlFor="fullName">{copy.name_label}</label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  placeholder={copy.name_placeholder}
                  value={details.fullName}
                  onChange={change}
                  required
                  aria-invalid={errors.fullName ? true : undefined}
                  aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                />
                {fieldError('fullName')}
              </div>
              <div>
                <label htmlFor="email">{copy.email_label}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={copy.email_placeholder}
                  value={details.email}
                  onChange={change}
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {fieldError('email')}
              </div>
              <div>
                <label htmlFor="role">{copy.role_label}</label>
                <select
                  id="role"
                  name="role"
                  value={details.role}
                  onChange={change}
                  required
                  aria-invalid={errors.role ? true : undefined}
                  aria-describedby={errors.role ? 'error-role' : undefined}
                >
                  <option value="" disabled>{rolePlaceholder}</option>
                  {roles.map((role) => <option key={role}>{role}</option>)}
                </select>
                {fieldError('role')}
              </div>
            </div>
            <div className={styles.consent}>
              <label htmlFor="consent">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={details.consent}
                  onChange={change}
                  required
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? 'error-consent' : undefined}
                />
                <span>{copy.consent}</span>
              </label>
              {fieldError('consent')}
            </div>
            <button className={`primary ${styles.submit}`} type="submit">{copy.submit}</button>
            <p className={styles.privacy}>{copy.privacy}</p>
          </form>
        )}
        <p className="visually-hidden" role="status">{notice}</p>
        <p className={failure ? styles.error : 'visually-hidden'} role="alert">{failure}</p>
      </div>
    </section>
  );
}
