<template>
  <div class="action-items-wrapper">
    <span v-if="state.actionItem.showSearch" class="action-item" @click="onShowSearch">
      <n-icon size="18">
        <SearchIcon />
      </n-icon>
    </span>
    <n-popover placement="bottom" trigger="click" :width="300">
      <template #trigger>
        <n-badge v-if="state.actionItem.showMessage" :value="badgeValue" class="badge-action-item">
          <n-icon size="18">
            <NotificationsIcon />
          </n-icon>
        </n-badge>
      </template>
      <PopoverMessage @clear="badgeValue = 0" />
    </n-popover>
    <span v-if="state.actionItem.showRefresh" class="action-item" @click="onRefrehRoute">
      <n-icon size="18">
        <RefreshIcon />
      </n-icon>
    </span>
    <span
      v-if="state.actionItem.showFullScreen && state.device !== 'mobile'"
      class="action-item"
      @click="onScreenFull"
    >
      <n-icon size="18">
        <ExpandIcon />
      </n-icon>
    </span>
    <span class="action-item" @click="onShowSetting">
      <n-icon size="18">
        <SettingIcon />
      </n-icon>
    </span>
    <SearchContent ref="searchContentRef" />
    <Setting ref="settingRef" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useMessage } from 'naive-ui'
  import screenfull from 'screenfull'
  import { useRoute, useRouter } from 'vue-router'
  import { useLayoutStore } from '../../components/index'
  import { SearchContentType } from '@/types/components'
  import {
    SettingsOutline as SettingIcon,
    SearchOutline as SearchIcon,
    Expand as ExpandIcon,
    NotificationsOutline as NotificationsIcon,
    RefreshOutline as RefreshIcon,
  } from '@vicons/ionicons5'
  export default defineComponent({
    name: 'ActionItems',
    components: {
      SearchIcon,
      SettingIcon,
      ExpandIcon,
      NotificationsIcon,
      RefreshIcon,
    },
    setup() {
      const searchContentRef = ref<SearchContentType>()
      const showSearchContent = ref(false)
      const searchContent = ref('')
      const settingRef = ref()
      const badgeValue = ref(3)
      const store = useLayoutStore()
      const message = useMessage()
      const router = useRouter()
      const route = useRoute()
      function onShowSearch() {
        searchContentRef.value?.onShow()
      }
      function onScreenFull() {
        if (!screenfull.isEnabled) {
          message.error('当前浏览器不支持全屏操作')
          return false
        }
        screenfull.toggle()
      }
      function onRefrehRoute() {
        router.replace({ path: '/redirect' + route.path })
      }
      function onShowSetting() {
        settingRef.value.openDrawer()
      }
      return {
        searchContentRef,
        settingRef,
        showSearchContent,
        searchContent,
        badgeValue,
        state: store.state,
        onShowSearch,
        onScreenFull,
        onRefrehRoute,
        onShowSetting,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .action-items-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    .action-item {
      min-width: 40px;
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
        color: var(--primary-color-hover);
      }
    }
    .badge-action-item {
      cursor: pointer;
      margin-right: 30px;
    }
  }
</style>
<style lang="scss" scoped>
  :deep(.n-input .n-input__border, .n-input .n-input__state-border) {
    border: none;
    border-bottom: 1px solid currentColor;
  }
  :deep(.el-input__inner) {
    border: none !important;
    height: 35px;
    line-height: 35px;
    color: currentColor !important;
    background-color: transparent !important;
  }
</style>
