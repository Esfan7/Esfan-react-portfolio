import Nav from "./Nav";
export default function Contact(){

    return <div className="contact-page"><Nav title="Contact Us" />
    <main>
        <div className="row">
        <form>
            <fieldset>
                <label>Name</label>
                <input type="text" required></input>
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input type="text" required></input>
            </fieldset>
            <fieldset>
                <label>Message</label>
                <input type="text" required></input>
            </fieldset>
            <fieldset>

                <input type="submit" value={"Send"}/>
            </fieldset>
        </form>
        </div>
    </main>
    </div>

}
