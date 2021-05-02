import * as THREE from 'three';

export default class Particles {

    constructor(texture){
        this.texture = texture;
        this.size = 0.7;
        this.count = 5000;
        this._initialize();
    }

    _initialize(){
        const particlesGeometry = new THREE.BufferGeometry();
        const position = new Float32Array(this.count * 3);
        const color = new Float32Array(this.count * 3);

        for(let i = 0; i < this.count * 3; i++)
        {
            position[i] = (Math.random() - 0.5) * 100;
            color[i] = Math.random()
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(position,3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(color,3));

        const particlesMaterial = new THREE.PointsMaterial({
            size:this.size,
            sizeAttenuation:true,
            transparent:true,
            alphaMap:this.texture,
            depthWrite:false,
            vertexColors:true
        });

        const particles = new THREE.Points(particlesGeometry,particlesMaterial);

        this.particles = particles;
    }

}