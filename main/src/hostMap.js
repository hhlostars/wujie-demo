const map = {
  // Vue2
  "//localhost:7200/": "/vue2/",
  // vue3
  "//localhost:5174/": "/vue3/",
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") {
    console.log(map[host]);
    
    return map[host];
  };
  return host;
}
