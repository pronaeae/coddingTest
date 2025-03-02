function floodFill(image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    const prevColor = image[sr][sc];

    if (prevColor === color) return image;

    function dfs(x, y) {
        if (x < 0 || x >= rows || y < 0 || y >= cols || image[x][y] !== prevColor) return;
        image[x][y] = color;

        const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }
    }

    dfs(sr, sc);
    return image;
}