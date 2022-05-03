function Step1() {
    return ( 
        <div className="flex column">
            <div className="flex column">
                <label> Name</label>
                <input placeholder="your name"/>
            </div>
            <div className="flex column">
                <label>UPI ID</label>
                <input placeholder="yourname@bank"/>
            </div>
        </div>
     );
}

export default Step1;