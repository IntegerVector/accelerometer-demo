async function getPermission(name) {
    return navigator
        .permissions
        .query({ name });
}

export async function getAccelerometerPermission() {
    return getPermission('accelerometer');
}
