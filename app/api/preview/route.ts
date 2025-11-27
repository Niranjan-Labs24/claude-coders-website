import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { wordpressService } from '@/lib/wordpress';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const id = searchParams.get('id');

    // 1. Check the secret and ID
    if (secret !== process.env.WP_PREVIEW_SECRET || !id) {
        return new Response('Invalid token or missing ID', { status: 401 });
    }

    // 2. Fetch the draft post by ID
    const { posts } = await wordpressService.getAllPosts(1, 100, 'draft');
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
        return new Response('Post not found', { status: 404 });
    }

    // 3. Generate a slug from the title (since drafts don't have slugs)
    const slug = post.slug || post.title.rendered.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    // 4. Enable Draft Mode
    const draft = await draftMode();
    draft.enable();

    // 5. Redirect to the blog page with the generated slug
    redirect(`/blogs/${slug}`);
}
