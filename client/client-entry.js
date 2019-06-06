import createApp from './create-app'

const {app, router} = createApp()

console.log(createApp, 'createApp')

router.onReady(() => {
  app.$mount('#root')
})
