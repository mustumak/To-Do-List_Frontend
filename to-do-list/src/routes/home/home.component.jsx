import { useState } from "react";
import Title from "../../components/title/title.component";
import Auth from "../Authentication/Authentication";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    const [authMode, setAuthMode] = useState(null);

    return(
        <div id="homePage">
            <Title shrink={authMode !== null}/>
            <Auth authMode={authMode} setAuthMode={setAuthMode} />
            <Footer />
        </div>
    )

}

export default Home;