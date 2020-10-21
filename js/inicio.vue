//! Creador de textos
new Vue({
    el: "#app",
    data: {
        nuevaTarea: '',
        tareas: [],
    },
    methods: {
        guardarTarea() {
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }
})
//! Resolución de imagenes de gatitos
new Vue({
    el: "#app-2",
    data: {
        baseUrl: "https://placekitten.com",
        ancho: "",
        alto: ""
    },
    computed: {
        urlCompleta() {
            return `${this.baseUrl}/${this.ancho*2}/${this.alto*2}`;
        },
    }
});
//! Directiva if-else
new Vue({
    el: '#app3',
    data: {
        seen: 31
    }
})
//! Directiva V-for
new Vue({
    el: 'main',
    data:{
        days:['lunes', 'martes', 'miercoles']
    }
})








Vue.config.devtools = true; //*linea para habilitar Vuedevtools