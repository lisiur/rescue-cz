import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <div class="h-full">
        <RouterView />
      </div>
    )
  }
})
