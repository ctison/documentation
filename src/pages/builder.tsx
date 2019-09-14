import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"
import { useEffect, useState } from "react"

const Api = ({ location }) => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(
      typeof window === "undefined"
        ? false
        : window.matchMedia("(max-width: 768px)").matches
    )
  }, [])

  return (
    <Layout location={location}>
      <Seo
        title="Builder"
        description="Simple GUI for build forms with validation"
      />
      <BuilderPage isStatic isMobile={isMobile} />
    </Layout>
  )
}

export default Api
