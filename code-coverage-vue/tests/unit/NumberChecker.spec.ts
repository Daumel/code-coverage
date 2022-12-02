import { mount } from '@vue/test-utils'
import NumberChecker from '@/components/NumberChecker.vue'

describe('NumberChecker', () => {
  it('Button is not clicked', () => {
    const wrapper = mount(NumberChecker, { props: { array: [], number: 0 } });
    expect(wrapper.find('#counter').text()).toBe('0')
    expect(wrapper.find('#result').text()).toBe('No result yet')
  })

  it('Array contains number', async () => {
    const wrapper = mount(NumberChecker, { props: { array: [1, 2, 3, 4, 5], number: 5 } });
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('#counter').text()).toBe('1')
    expect(wrapper.find('#result').text()).toBe('Array contains number')
  })

  it('Array doesn\'t contain number', async () => {
    const wrapper = mount(NumberChecker, { props: { array: [1, 2, 3, 4, 5], number: 6 } });
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('#counter').text()).toBe('1')
    expect(wrapper.find('#result').text()).toBe('Array doesn\'t contain number')
  })
})
