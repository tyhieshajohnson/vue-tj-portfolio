import { createStore } from 'vuex'
const jsonLink = 'https://tyhieshajohnson.github.io/vue-tj-port-json/index.json'

const fetchData = async (url, mutation, dataProperty, context) => {
  context.commit('setLoading', true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    context.commit(mutation, data[dataProperty]);
  } catch (error) {
    context.commit('setError', true);
    alert(`Failed to fetch ${mutation}`);
  } finally {
    context.commit('setLoading', false);
  }
};

export default createStore({
  state: {
    projects: [],
    resume: [],
    testimonial: [],
  },
  getters: {
  },
  mutations: {
    setProjects: (state,projects)=> {
      state.projects = projects;
    },
    setResume: (state,resume)=> {
      state.resume = resume;
    },
    setTestimonial: (state,testimonial)=> {
      state.testimonial = testimonial;
    },
  },
  actions: {
    fetchData: async (context, { url, mutation, dataProperty }) => {
      await fetchData(url, mutation, dataProperty, context);
    },
    getProjects: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setProjects",
      dataProperty: "projects",
    }),
    getResume: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setResume",
      dataProperty: "resume",
    }),
    getTestimonial: async (context) => context.dispatch('fetchData', {
      url: jsonLink,
      mutation: "setTestimonial",
      dataProperty: "testimonial",
    }),
  },
  modules: {
  }
})
