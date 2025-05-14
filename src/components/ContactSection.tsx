function DescriptionSection() {
  return (
    <div className="description-content mt-12">
      <div className="description">
         <hr className="border-t border-black" />
        <p>Welcome to Secure & Smart Search — a powerful, privacy-focused
             search tool designed to help you find information quickly and easily. 
             Whether you're searching for topics like education, technology, or
              current events, our smart search engine delivers accurate and useful 
              results in seconds. What makes this tool special is its strong focus on 
              security and simplicity. Your privacy is always protected — we never track 
              your activity or store personal information. You can search with confidence, 
              knowing that your data stays safe.
<br />
<br />
<br />
</p>
         <hr className="border-t border-black" />
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <>
      <DescriptionSection />
      <div className="contact-content mt-12">
        <h1 className="help">For assistance/feedback, please Contact Me</h1>
        <div className="text-animatec">
      
           <hr className="border-t border-black" />
          <hr className="border-t border-black" />

          <p>Phone: <a href="tel:+251912889500">📞 +251912889500</a></p>
      
          <p>Email: <a href="mailto:abekum21@gmail.com">📧 abekum21@gmail.com</a></p>
   
          <p>X (Twitter): <a href="https://x.com/Abekum21" target="_blank" rel="noopener noreferrer">@Abekum21</a></p>
         
          <p>Telegram: <a href="https://t.me/Abekum" target="_blank" rel="noopener noreferrer">📱 Abekum</a></p>

           <hr className="border-t border-black" />
        </div>
      </div>
    </>
  );
}
