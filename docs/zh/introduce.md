# 介绍
sdfsdenvg
- [查看日记](/zh/java/) <!-- sends the user to the root index.md -->


## vitepress示例仓库： 

https://github.com/brc-dd


## 集成 AcroDesign
<a-space>
  <a-button type="primary">Primary</a-button>
  <a-button>Secondary</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="outline">Outline</a-button>
  <a-button type="text">Text</a-button>
</a-space>
<a-button @click="handleClick">Open Modal</a-button>
<a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
  <template #title>
    Title
  </template>
  <div>You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
</a-modal>

<a-carousel
    :style="{
      height: '240px',
    }"
    :default-current="2"
    @change="handleChange"
  >
    <a-carousel-item v-for="image in images">
      <img
        :src="image"
        :style="{
          width: '100%',
        }"
      />
    </a-carousel-item>
  </a-carousel>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);

    const handleClick = () => {
      visible.value = true;
    };
    const handleOk = () => {
      visible.value = false;
    };
    const handleCancel = () => {
      visible.value = false;
    };
    const images = [
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    ];
    const handleChange=(value)=>{
      console.log(value)
    };

    return {
      visible,
      handleClick,
      handleOk,
      handleCancel,
      images,
      handleChange
    }
  },
}
</script>

## 集成 Tailwind CSS

<TestTailwind/>
