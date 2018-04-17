<template>
  <div class="step-item" :class="[isProcess&&'isProcess',isSuccess&&'isSuccess',isWait&&'isWait',isVertical&&'step-vertical',isSimple&&'step-simple']">
    <div class="step-head">
      <div class="line"></div>
      <div class="icon">
        <i :class="[icon?icon:'step-icon-check_circle']"></i>
        <div class="step-notify" v-if="notify">{{notify}}</div>
      </div>
    </div>
    <div class="step-main">
      <div class="title">{{this.title}}<slot name="title"></slot></div>
      <div class="arrow">&gt;</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'step',
      data(){
        return{
          index:Number,
          isWait:true,
          isProcess:false,
          isSuccess:false
        }
      },
      props:{
        title: {
          type: String,
          default: ''
        },
        icon: {
          type: String,
          default: ''
        },
        notify: {
          type: String,
          default: ''
        }
      },
      computed:{
        isVertical() {
          return this.$parent.direction === 'vertical';
        },
        isSimple() {
          return this.$parent.simple;
        }
      },
      created() {
        this.$parent.steps.push(this);
        this.index = this.$parent.steps.indexOf(this);
      },
      beforeDestroy() {
        const steps = this.$parent.steps;
        const index = steps.indexOf(this);
        if (index >= 0) {
          steps.splice(index, 1);
        }
      },
      mounted() {
        this.$watch('$parent.stepIndex', this.updateStatus,{immediate: true});
      },
      methods:{
        updateStatus(val){
          if(val == this.index){
            this.isWait = false;
            this.isProcess = true;
            this.isSuccess = false;
          }else{
            this.isProcess = false;
            if(val == this.index+1){
              this.isSuccess = true;
            }else{
              this.isWait = true;
            }
          }
        }
      }
    }
</script>

<style>
  .step-item{
    flex:1;
    text-align: center;
    position: relative;
    font-size: 14px;
    display: flex;
    flex-direction: column;
  }
  .step-item.isWait{
    color: #c0c4cc;
  }
  .step-item.isProcess{
    color: black;
  }
  .step-item.isSuccess{
    color: green;
  }
  .step-item.step-simple{
    flex-direction: row;
  }
  .step-item .arrow{
    display: none;
  }
  .step-item.step-simple .arrow{
    display: block;
  }

  .step-item:last-of-type{
    flex:none;
  }
  .step-item:last-of-type .arrow{
    display: none;
  }

  .step-item .title{
    flex:none;
    display: inline-block;
    position: relative;
    font-size: 14px;
    font-weight: 700;
  }

  .step-item .arrow{
    flex:1;
  }

  .step-simple.step-item.isProcess .title:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10%;
    margin: auto;
    content: "_";
    font-weight: bolder;
    font-size: .48rem;
  }

  .step-head{
    padding-right: 0;
    flex:1;
    display: flex;
    position: relative;
  }
  .step-item.step-simple .step-head{
    padding-right: 10px;
    flex:none;
    display: block;
  }

  .step-head .icon{
    display: inline-block;
    flex: none;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .step-head .icon i{
    line-height: 30px;
    font-size: 24px;
  }
  .step-item.step-simple .icon{
    display: block;
  }

  .step-item .step-head .line{
    position: absolute;
    left: 30px;
    right: 0;
    top:0;
    bottom: 0;
    margin: auto;
    height: 2px;
  }
  .step-item.isWait .step-head .line{
    background-color: #c0c4cc;
  }
  .step-item.isProcess .step-head .line{
    background-color: black;
  }
  .step-item.isSuccess .step-head .line{
    background-color: green;
  }

  .step-item.step-simple .line{
    display: none;
  }

  .step-item:last-of-type .step-head .line{
    display: none;
  }

  .step-main{
    flex: 1;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
  }
  .step-item.step-simple .step-main{
    margin-top: 0;
  }

  .step-item.step-vertical{
    flex-direction: row;
  }
  .step-item.step-vertical .line{
    position: absolute;
    left: 0;
    right: 0;
    top:30px;
    bottom: 0;
    margin: auto;
    height: auto;
    width: 3px;
  }

  .step-item.isWait.step-vertical .line{
    background-color: #c0c4cc;
  }
  .step-item.isProcess.step-vertical .line{
    background-color: black;
  }
  .step-item.isSuccess.step-vertical .line{
    background-color: green;
  }

  .step-item.step-vertical .step-head{
    width: 30px;
    flex: none;
  }
  .step-item.step-vertical .step-main{
    margin-top: 0;
    margin-left: 10px;
  }

  .step-item .icon .step-notify{
    position: absolute;
    top: 0;
    left: 30px;
    width: 200px;
    padding: 18px 20px;
    border-radius: 4px;
    background-color: #fff;
    z-index: 10;
    color: black;
    opacity: 0;
    transition: all .4s ease;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .icon:hover .step-notify{
    opacity: 1;
  }

  @media screen and (min-width: 450px) {
    .step-head .icon i{
      line-height: 30px;
      font-size: 30px;
    }
    .step-main .title{
      line-height: 38px;
      font-size: 16px;
    }
    .step-item .step-head .line{
      height: 3px;
    }
  }
</style>
