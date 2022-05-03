function SubscriptionEmail() {
    return ( 
        <div className='flex column'>
        <div className="flex column">
          <label>Full name</label>
          <input placeholder='John Doe'/>
        </div>
          <div className="flex column">
            <label>Email</label>
            <input placeholder='example@gmail.com'/>
          </div>
      </div>
     );
}

export default SubscriptionEmail;