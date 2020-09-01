<template>
    <div class="chartlet">
 
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const ameng = require('@/assets/ameng.jpg');

export default {
    name: 'chartlet',
    data() {
        return {
            
        };
    },
    mounted() {
        console.log('THree', THREE)
        /**
         *  创建场景
        */
        const scene = new THREE.Scene();
        const axesHelper = new THREE.AxesHelper(600)
        scene.add(axesHelper);


        /**
         *  创建纹理贴图图形
        */
        const imgGeometry = new THREE.PlaneGeometry(300, 200);
        const textureLoader = new THREE.TextureLoader();
        textureLoader.setCrossOrigin("Anonymous");
        textureLoader.load('/assets/ameng.jpg', function (texture){
            const imgMaterial = new THREE.MeshLambertMaterial({
                map: texture,
            });
            const imgMesh = new THREE.Mesh(imgGeometry, imgMaterial);
            scene.add(imgMesh);
        });

        // 图片加载器
        // var ImageLoader = new THREE.ImageLoader();
        // ImageLoader.setCrossOrigin("Anonymous");
        // // load方法回调函数，按照路径加载图片，返回一个html的元素img对象
        // ImageLoader.load('/assets/ameng.jpg', function(img) {
        // // image对象作为参数，创建一个纹理对象Texture
        // var texture = new THREE.Texture(img);
        // // 下次使用纹理时触发更新
        // texture.needsUpdate = true;
        // var material = new THREE.MeshLambertMaterial({
        //     map: texture, //设置纹理贴图
        // });
        // var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        // scene.add(mesh); //网格模型添加到场景中
        // });

        /**
         *  创建光源
        */
        // 点光源设置
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(200, 200, 100);
        scene.add(pointLight);

        // 环境光设置
        // const ambientLight = new THREE.AmbientLight(0xF56C6C);
        // scene.add(ambientLight);

        /**
         *  创建相机
        */
        console.log(this.$el.getBoundingClientRect());
        const width = this.$el.getBoundingClientRect().width;
        const height = this.$el.getBoundingClientRect().height;
        const k = width / height;
        const s = 200;
        
        const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0, 1000);
        camera.position.set(300, 300, 300);
        camera.lookAt(scene.position);

        /**
        *  创建渲染器并将它添加到节点中
        */
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(0xffffff, 1);

        this.$el.appendChild(renderer.domElement);
    
        function Render() {
            renderer.render(scene, camera);
        }
        Render()

        const control = new OrbitControls(camera, renderer.domElement);

        control.addEventListener('change', Render);
    }
};
</script>

<style lang="scss">
.chartlet {
    color: red;
    height: 100%;
}
</style>