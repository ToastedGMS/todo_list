const projects = (projectName, ...args) => {
    const obj = {};
    obj[projectName] = [...args];
    return obj;
}

export { projects }