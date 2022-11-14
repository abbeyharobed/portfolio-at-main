import MailchimpSubscribe from "react-mailchimp-subscribe"

function mailchimp() {
    const posturl ='${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}'

  return (
    <>
        <MailchimpSubscribe 
        url={posturl}
        render={({subscribe, status, message})=>( <></>)}
        />
    </>
  )
}

export default mailchimp