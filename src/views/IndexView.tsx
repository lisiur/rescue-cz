import { defineComponent, ref, watch } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    enum TabKey {
      Home = 0,
      Friends = 1,
      Airdrop = 2
    }

    const TabRouteName = {
      [TabKey.Home]: 'home',
      [TabKey.Friends]: 'friends',
      [TabKey.Airdrop]: 'airdrop'
    }

    const router = useRouter()
    const active = ref<TabKey>(TabKey.Home)
    watch(
      active,
      (value) => {
        router.push({
          name: TabRouteName[value]
        })
      },
      {
        immediate: true
      }
    )

    return () => (
      <div>
        <Tabbar v-model={active.value}>
          <TabbarItem icon="home-o">SeeUSoon</TabbarItem>
          <TabbarItem icon="friends-o">Friends</TabbarItem>
          <TabbarItem icon="search">Airdrop</TabbarItem>
        </Tabbar>
      </div>
    )
  }
})
