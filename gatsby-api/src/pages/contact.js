import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <h2>Contact</h2>
        <div>
            <form>
                <label for="name">Name</label>
                <input name="name" type="text" value="" onChange="" />
                <label for="desc">Description</label>
                <textarea name="desc" value="" onChange="" />
                <input type="submit" value="Sumbit" />
            </form>
            
        </div>
    </Layout>
)