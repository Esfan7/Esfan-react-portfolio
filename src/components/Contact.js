import Footer from "./Footer"
import Nav from "./Nav";
export default function Contact({setScreen}){

    return <div className="contact-page"><Nav title="Contact Us"  setScreen={setScreen} />
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
        <Footer/>
    </main>
    </div>

}
