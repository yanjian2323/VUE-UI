1. 学习了vue中aync关键字的用法，比如下面的写法

   ```vue
   <y-tab :selected.sync="selectedTab"></y-tab>
   ```

   其实sync就是一个语法糖，相当于

   ```vue
   <y-tab :selected="selectedTab" @update:selected="selectedTab = arg"></y-tab>
   ```

   在y-tab组件的内部通过$emit来触发update:selected事件

   ```vue
   this.$emit('update:selected','这里是传递的值')
   ```

2. eventBus，Vue实例本身提供观察订阅的功能,所以new Vue()一个空的实例出来,其实就是一个观察者模式而已

3. 跨组件(通常不是直接的父子关系)之间传递数据，用provide结合inject可以做到,在父容器中声明provide,子容器用inject接收

   ```vue
   // 在父组件中:
   export default {
       data() {
           return {
               eventBus: new Vue()
           }
       },
       // 不能通过this.eventBus或者this.provide的方式用，所以定义了上面的data作为中转，通过data来访问
       provide() {
           const {eventBus} = this
           return {
               eventBus,
           }
       }
   }
   // 在子组件中(通过this.eventBus就可以使用)：
   export default {
       inject: ['eventBus']
   }
   ```

4. margin-left: auto 让元素到最右边，可以不使用float或者position了

5. 在组件内部不用 px 来控制padding，用 em 来写