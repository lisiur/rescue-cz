import { defineComponent, onMounted } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { RouterView, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    onMounted(() => {
      router.push('/home')
    })

    return () => (
      <div>
        <RouterView />
        <Tabbar route>
          <TabbarItem replace to="/home" icon="home-o">
            SeeUSoon
          </TabbarItem>
          <TabbarItem replace to="/friends" icon="friends-o">
            Friends
          </TabbarItem>
          <TabbarItem replace to="/airdrop" icon="search">
            Airdrop
          </TabbarItem>
        </Tabbar>
      </div>
    )
  }
})
