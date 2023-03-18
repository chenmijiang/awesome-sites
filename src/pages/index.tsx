
import HotSites from "@/components/HotSites"
import CustomSites from "@/pages/home/CustomSites"
import List from "@/pages/home/List"

export default function Home() {
  return (
    <>
      <section>
        <div >
          <HotSites></HotSites>
          <CustomSites></CustomSites>
          <List></List>
        </div>
      </section>
    </>
  )
}
