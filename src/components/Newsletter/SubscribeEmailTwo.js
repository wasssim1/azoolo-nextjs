import { IoIosArrowRoundForward } from 'react-icons/io'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () => {
    email &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
      })

    let emailInput = document.getElementById('mc-form-email')
    emailInput.value = ''
  }

  return (
    <div className="subscribe-form">
      <div className="mc-form">
        <input
          id="mc-form-email"
          className="email"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Votre addresse eMail"
        />
        <button className="button" onClick={submit}>
          <IoIosArrowRoundForward />
        </button>
      </div>

      {status === 'sending' && (
        <div style={{ color: '#3498db', fontSize: '14px', lineHeight: '1.3' }}>
          Envoi en cours...
        </div>
      )}
      {status === 'error' && (
        <div
          style={{ color: '#e74c3c', fontSize: '14px', lineHeight: '1.3' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: '#2ecc71', fontSize: '14px', lineHeight: '1.3' }}
          dangerouslySetInnerHTML={{
            __html: `Inscrit avec succès.`,
          }}
        />
      )}
    </div>
  )
}

const SubscribeEmailTwo = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default SubscribeEmailTwo
