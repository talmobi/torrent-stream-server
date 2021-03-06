"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTorrentsApi = void 0;
function setupTorrentsApi(app, config, logger, client) {
    app.post('/api/torrents', async (req, res) => {
        const link = req.query.torrent;
        if (!(typeof link === 'string')) {
            return res.status(400).send({
                'error': 'Incorrect torrent parameter'
            });
        }
        const torrent = await client.addAndGet(link);
        res.send(torrent.getMeta());
    });
    app.get('/api/torrents', (req, res) => res.send(client.getAll().map(v => v.getMeta())));
    app.get('/api/torrents/:id', (req, res) => {
        const torrent = client.get(req.params.id);
        if (torrent) {
            res.send(torrent.getMeta());
        }
        else {
            res.status(404).send({
                'error': 'Torrent not found'
            });
        }
    });
    return app;
}
exports.setupTorrentsApi = setupTorrentsApi;
