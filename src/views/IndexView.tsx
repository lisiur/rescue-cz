import { defineComponent } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { RouterView, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    router.push('/home')

    return () => (
      <div class="h-full flex flex-col">
        <div class="flex-1 overflow-auto">
          <RouterView />
        </div>
        <div class="h-[var(--van-tabbar-height)]"></div>
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
