const express = require('express');
const axios = require('axios');
const qs = require('query-string');

const errorHandler = require('../../utils/errorHandler');
const { ZOOM_API_BASE_URL } = require('../../constants');

const router = express.Router();

/**
 * Get a meeting's recordings
 * 
 */
router.get('/', async (req, res) => {
  const { headerConfig, params } = req;

  return res.json(headerConfig.headers)
  
});

/**
 * Get a meeting download link
 */
router.get('/:meetingId/download', async (req, res) => {
  const { headerConfig, params } = req;
  const { meetingId } = params;

  try {
    const request = await axios.get(downloadUrl, headerConfig);
    return res.json(request.data);
  } catch (err) {
    return errorHandler(err, res, `Error getting meeting download link: ${meetingId}`);
  }
})

module.exports = router;