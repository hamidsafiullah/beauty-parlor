USE [BeautyParlorDB]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 18/06/2023 1:40:25 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Message] [nvarchar](max) NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 18/06/2023 1:40:25 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductId] [int] NOT NULL,
	[Name] [varchar](100) NULL,
	[Description] [varchar](255) NULL,
	[ImageLink] [varchar](255) NULL,
	[ProductLink] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 18/06/2023 1:40:25 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](100) NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (1, N'Maybelline New York Fit Me Matte + Poreless Foundation', N'A lightweight foundation that mattifies and refines pores for a natural, seamless finish.', N'image_link_1.jpg', N'https://www.maybelline.com/face-makeup/foundation/fit-me-matte-poreless-foundation')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (2, N'NARS Radiant Creamy Concealer', N'A buildable, creamy concealer that provides medium to full coverage with a radiant finish.', N'image_link_2.jpg', N'https://www.narscosmetics.com/USA/radiant-creamy-concealer/999NACRCC0001.html')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (3, N'Anastasia Beverly Hills Modern Renaissance Eyeshadow Palette', N'A versatile eyeshadow palette featuring 14 warm, neutral shades with a mix of matte and shimmer finishes.', N'image_link_3.jpg', N'https://www.anastasiabeverlyhills.com/modern-renaissance-palette/ABH01-18170.html')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (4, N'MAC Cosmetics Ruby Woo Lipstick', N'A highly-pigmented, matte red lipstick that is long-wearing and iconic.', N'image_link_4.jpg', N'https://www.maccosmetics.com/product/13854/310/products/makeup/lips/lipstick/lipstick#/shade/Ruby_Woo')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (5, N'Urban Decay Naked Heat Eyeshadow Palette', N'A hot, fiery eyeshadow palette featuring 12 warm-toned shades perfect for creating sultry eye looks.', N'image_link_5.jpg', N'https://www.urbandecay.com/naked-heat-eyeshadow-palette-by-urban-decay/ud801.html')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (6, N'Benefit Cosmetics Hoola Bronzer', N'A matte bronzing powder that adds warmth and a natural-looking tan to the complexion.', N'image_link_6.jpg', N'https://www.benefitcosmetics.com/en-us/product/hoola-matte-bronzer')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (7, N'Fenty Beauty Pro Filt''r Soft Matte Longwear Foundation', N'A long-wearing foundation with a soft matte finish that provides medium to full coverage.', N'image_link_7.jpg', N'https://www.fentybeauty.com/pro-filtr/soft-matte-longwear-foundation/FB30006.html')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (8, N'Tarte Shape Tape Concealer', N'A full-coverage, creamy concealer that brightens and smooths the skin while hiding imperfections.', N'image_link_8.jpg', N'https://tartecosmetics.com/shop/makeup/face/concealer/shape-tape-contour-concealer')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (9, N'Too Faced Better Than Sex Mascara', N'A volumizing mascara that delivers intense black, dramatic lashes for a bold look.', N'image_link_9.jpg', N'https://www.toofaced.com/eye-makeup/mascara/better-than-sex-mascara/80029.html')
INSERT [dbo].[Product] ([ProductId], [Name], [Description], [ImageLink], [ProductLink]) VALUES (10, N'ColourPop Super Shock Cheek Blush', N'A unique cream-to-powder blush formula that provides a natural, buildable flush of color.', N'image_link_10.jpg', N'https://colourpop.com/collections/blush/products/super-shock-cheek')
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Email], [Password], [CreatedAt]) VALUES (1, N'admin@mail.com', N'12345', CAST(N'2023-12-12T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
