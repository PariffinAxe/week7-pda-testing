import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App)
  })

  it('should add up to 5', () => {
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5);
  })

  it('should take away to leave 3', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('should multiply to get 15', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  })

  it('should divide to leave 3', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3);
  })

  it('should concatenate to 23', () => {
    wrapper.vm.numberClick(2);
    wrapper.vm.numberClick(3);
    expect(wrapper.vm.runningTotal).to.equal(23);
  })

  it('should chain multiple operation to give 49', () => {
    wrapper.vm.numberClick(7);
    wrapper.vm.operatorClick('*');
    wrapper.vm.operatorClick('*');
    expect(wrapper.vm.runningTotal).to.equal(49);
  })

  it('should leaving previous total as 23', () => {
    wrapper.vm.previousTotal = 23;
    wrapper.vm.runningTotal = 12;
    wrapper.vm.clearClick();
    expect(wrapper.vm.previousTotal).to.equal(23);
  })


})
