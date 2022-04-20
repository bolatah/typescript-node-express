const getTimeStamp = (): string => {
    return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${namespace}`, object);
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${namespace}`);
    }
};

const warn = (namespace: string, message: string, object: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${namespace}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${namespace}`);
    }
};

const error = (namespace: string, message: string, object: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${namespace}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${namespace}`);
    }
};

const debug = (namespace: string, message: string, object: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${namespace}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${namespace}`);
    }
};
export default {
    info,
    warn,
    error,
    debug
};
