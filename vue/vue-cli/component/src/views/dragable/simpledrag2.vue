<template>
  <div>
    <draggable class="syllable_ul" element="ul" :list="syllable" :options="{group:'title',animation:150}" :no-transition-on-drag="true" @change="change" @start="start" @end="end" :move="move">
      <transition-group type="transition" :name="!drag?'syll_li':null" :css="true">
        <!-- <li v-for="(item,idx) in syllable" :key="idx">{{item.title}}</li> -->
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      drag: null,
      syllable: [{ title: 'name' }, { title: 'age' }]
    }
  },
  methods: {
    change(evt) {
      // evt里面有两个值，一个evt.added和evt.removed 可以分别知道移动元素的ID和删除元素的ID
      console.log('change...', evt)
    },
    // start,end,add,update,sort,remove得到的都差不多
    start(evt) {
      this.drag = true
      console.log('start...', evt)
    },
    end(evt) {
      console.log('end...', evt)
      this.drag = true
      evt.item //可以知道拖动的本身
      evt.to //可以知道拖动的目标列表
      evt.from //可以知道之前的列表
      evt.oldIndex //可以知道拖动前的位置
      evt.newIndex // 可以知道拖动后的位置
    },
    move(evt, originalEvent) {
      console.log('move', evt)
      console.log(originalEvent) //鼠标位置
    }
  }
}
</script>