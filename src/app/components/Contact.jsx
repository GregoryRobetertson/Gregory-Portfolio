
export default function Contact() {
    const styles = {borderTop: '1px solid #6f42c1',
    boxShadow: '0 0 2px rgba(111,66,193,.9),0 0 4px rgba(111,66,193,.4),0 0 1rem rgba(111,66,193,.3),0 0 4rem rgba(111,66,193,.1)',
    opacity: '1'}
    return (
       <div className="col-lg-12" id="contact">
        <h2>Reach Out!</h2>
        <hr className='my-4' style={styles} />
        <p>If you have any questions or would like to get in touch, please feel free to contact me using the form below or reach out to me through my social media channels.

</p>
<h3>Socials</h3>
<ul className="list-unstyled">
    <li> <a href="https://www.linkedin.com/in/gregory-robertson-jr-968a22295/">LinkedIn</a> </li>
    <li> <a href="https://github.com/GregoryRobetertson">GitHub</a> </li>
</ul>
<form className="mt-4 mx-auto text-white">
  <div className="flex flex-col mb-4">
    <label htmlFor="name" className="text-white">Name</label>
    <input type="text" id="name" className="bg-transparent border border-white rounded-md px-3 py-2 text-white w-full" />
  </div>
  <div className="flex flex-col mb-4">
    <label htmlFor="email" className="text-white">Email</label>
    <input type="email" id="email" placeholder="example@gmail.com" className="bg-transparent border border-white rounded-md px-3 py-2 text-white w-full" />
  </div>
  <div className="flex flex-col mb-4">
    <label htmlFor="message" className="text-white">Message</label>
    <textarea name="message" id="message" placeholder="Enter message" className="bg-transparent border border-white rounded-md px-3 py-2 text-white w-full"></textarea>
  </div>
</form>


       </div>
    )
}