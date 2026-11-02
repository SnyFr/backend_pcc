export const addMetric = async (req, res, next) => {
  try {
    const { id: userId, role } = req.user;
    const contentId = req.params.id;
    const {
      recorded_at,
      views_count = 0,
      likes_count = 0,
      comments_count = 0,
      shares_count = 0,
    } = req.body;

    // 1. Cari konten untuk cek keberadaan, status, dan pemiliknya
    const content = await prisma.content.findUnique({
      where: { id: contentId },
      select: { 
        id: true, 
        user_id: true, 
        status: true 
      },
    });

    if (!content) {
      return sendResponse(res, 404, false, "Content not found");
    }

    // 2. Validasi Otorisasi Role: Hanya Admin atau Creator (pemilik konten)
    const isCreator = content.user_id === userId;
    const isAdmin = role === "admin";

    if (!isAdmin && !isCreator) {
      return sendResponse(
        res,
        403,
        false,
        "Forbidden: Only admins and the content creator can add metrics"
      );
    }

    // 3. Validasi Status Konten: Harus 'published'
    if (content.status !== "published") {
      return sendResponse(
        res,
        400,
        false,
        "Metrics can only be recorded for published contents"
      );
    }

    // 4. Validasi Angka Tidak Boleh Negatif
    const views = Number(views_count);
    const likes = Number(likes_count);
    const comments = Number(comments_count);
    const shares = Number(shares_count);

    if (
      isNaN(views) || views < 0 ||
      isNaN(likes) || likes < 0 ||
      isNaN(comments) || comments < 0 ||
      isNaN(shares) || shares < 0
    ) {
      return sendResponse(
        res,
        400,
        false,
        "Metric counts (views, likes, comments, shares) must be non-negative"
      );
    }

    const metricDate = recorded_at ? new Date(recorded_at) : new Date();

    const newMetric = await prisma.contentMetric.create({
      data: {
        content_id: contentId,
        recorded_at: metricDate,
        views_count: views,
        likes_count: likes,
        comments_count: comments,
        shares_count: shares,
      },
    });

    return sendResponse(res, 201, true, "Metric recorded successfully", newMetric);
  } catch (error) {
    next(error);
  }
};