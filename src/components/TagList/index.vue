<template>
  <div class="tag-list-wrap">
    <div class="tag-label">
      {{label}}
    </div>
    <div class="tag-list">
      <div class="tag-item" :class="{'is-active': currentTag === tag.id}" v-for="tag in list" :key="tag.id" @click="handleClick(tag,tag.id,label)">{{tag.label}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tagList',
  props: {
    label: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      currentTag: 0
    }
  },
  methods: {
    handleClick(tag,id,level) {
      this.currentTag = id;
      this.$emit('send',tag,level)
    }
  }
}
</script>
<style lang="less" scoped> 
  .tag-list-wrap {
    width: 45%;
    display: flex;
    border-right: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 5px 20px;
    .tag-label {
      width: 75px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: #808080;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    .tag-list {
      display: flex;
      align-items: center;
      padding: 0 5px;
      width: 100%;
      .tag-item {
        color: rgba(102, 104, 108, 1);
        border: 1px solid rgba(153, 153, 153, 1);
        cursor: pointer;
        padding: 0 10px;
        margin-right: 3px;
        font-size: 13px;
        background: rgba(242, 242, 242, 1);
        height: 35px;
        line-height: 35px;
      }
      .tag-item:last-child{
         margin-right: 0px;
      }
      .is-active {
        color: #fff;
        background: #035cc1;
      }
    }
  }
</style>