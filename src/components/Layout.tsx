'use client';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<div className='page-wrapper'>{children}</div>
		</div>
	);
};
export default Layout;
