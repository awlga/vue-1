import Vue from 'vue';
import Demo from './demo.vue';

describe('Demo', () => {
  it('correctly sets the message when created', () => {
    const vm = new Vue(Demo).$mount()
    expect(vm.message).toBe('bye!')
  })

  it('renders the correct message', () => {
    const Constructor = Vue.extend(Demo)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})