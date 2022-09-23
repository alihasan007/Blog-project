import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPost } from "../lib/posts-util"
import Head from "next/head"

const HomePage = (props) => {
    return <Fragment>
        <Head>
            <title>Ali's Blog</title>
            <meta name="description" content="I post about programming and web development" />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>
}
export function getStaticProps() {
    const featuredPosts = getFeaturedPost()
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    }
}
export default HomePage

