import { getUserById } from "@/data/userProfileManagerApi"
import { TestComponent } from "src/components/zoozoo/test_component"

export const metadata = {
  title: "ZooZooPage",
  description: "test page for whatever",
}

export default function ZooZoo() {
  const getUserShoe = () => {
    const shoe = getUserById(43, 6)
    return shoe
  }

  return (
    <div>
      <div onLoad={getUserShoe}>ZooZoo Page</div>
      <div onLoad={getUserShoe}>{shoe.id}</div>
      <TestComponent />
    </div>
  )
}
