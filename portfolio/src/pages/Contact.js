import Buton from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function Contact() {
	return (
		<div>
			<h3>Contact Me!</h3>
			<form>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label>Name: </Form.Label>
					<Form.Control size="lg" type="string" placeholder='Enter Your Name Here' />
				</Form.Group>

				<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control size="lg" type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Message: </Form.Label>
        <Form.Control size="lg" as="textarea" rows={3} />
      </Form.Group>
    </Form>
				<Buton variant="primary" type="send">
					Send Message
				</Buton>
			</form>
		</div>
	)
}

export default Contact;