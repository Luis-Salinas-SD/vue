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




Vue.config.devtools = true; //*linea para habilitar Vuedevtools