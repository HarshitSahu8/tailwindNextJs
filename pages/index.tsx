import React from "react";

import {
    Container,
    Header,
    Main,
    Footer,
    Cards,
} from "@components/PreInstalledThings";
import { Banner, CTA } from "@components/Home";

const Home: React.FC = () => {
    return (
        <>
            <Banner />
            <CTA />
        </>
    );
};

export default Home;
