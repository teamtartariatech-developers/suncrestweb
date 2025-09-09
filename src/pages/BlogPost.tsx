import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, ArrowRight } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogsData.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related blogs (same category, excluding current post)
  const relatedBlogs = blogsData
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  // Convert markdown content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold text-gray-900 mb-4 mt-8">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc list-inside mb-6 space-y-2 ml-4">$1</ul>')
      .replace(/\n\n/g, '</p><p class="text-lg text-gray-700 leading-relaxed mb-6">')
      .replace(/^(?!<[h|u|l])(.+)$/gm, '<p class="text-lg text-gray-700 leading-relaxed mb-6">$1</p>');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blogs"
              className="inline-flex items-center space-x-2 text-primary-200 hover:text-white transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="animate-slide-up">
              <div className="flex items-center space-x-4 text-sm text-primary-200 mb-6">
                <span className="bg-primary-700 px-3 py-1 rounded-full font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {blog.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="animate-slide-up mb-12">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-12 animate-slide-up">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-primary max-w-none animate-slide-up"
              dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
            />

            {/* Author Bio */}
            <div className="border-t border-gray-200 pt-12 mt-12 animate-slide-up">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{blog.author}</h4>
                    <p className="text-gray-600">Senior Financial Advisor</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {blog.author} is a certified financial advisor with over 15 years of experience 
                  helping individuals and businesses achieve their financial goals. Specializing in 
                  investment planning and wealth management strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog, index) => (
                  <article 
                    key={relatedBlog.id}
                    className="card p-0 overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedBlog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(relatedBlog.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-primary-600 transition-colors duration-200">
                        <Link to={`/blog/${relatedBlog.slug}`}>
                          {relatedBlog.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {relatedBlog.excerpt.substring(0, 120)}...
                      </p>
                      
                      <Link 
                        to={`/blog/${relatedBlog.slug}`}
                        className="text-primary-600 font-medium hover:text-primary-700 flex items-center space-x-1 group text-sm"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Professional Financial Advice?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Our expert financial advisors are here to help you implement the strategies 
              discussed in this article and create a personalized plan for your financial success.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;