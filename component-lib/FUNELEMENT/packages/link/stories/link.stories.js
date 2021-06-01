import FunLink from '../src/link.vue'

export default {
  title: 'FunLink',
  component: FunLink,
}

export const Link = (_) => ({
  components: { FunLink },
  template: `
    <div>
      <fun-link href="http://www.baidu.com">baidu</fun-link>
    </div>
  `,
})
