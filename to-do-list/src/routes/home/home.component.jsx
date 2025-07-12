import Title from "../../components/title/title.component";
import Auth from "../Authentication/Authentication";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return(
        <div id="homePage">
            <Title />
            <Auth />
            <Footer />
        </div>
    )

}

export default Home;