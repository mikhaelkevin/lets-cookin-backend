PGDMP     2                    z            letscookinapps    14.3    14.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16438    letscookinapps    DATABASE     q   CREATE DATABASE letscookinapps WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Indonesian_Indonesia.1252';
    DROP DATABASE letscookinapps;
             
   nocturndev    false            �            1259    16458    comment    TABLE     k   CREATE TABLE public.comment (
    recipe_id integer,
    user_id integer,
    comment character varying
);
    DROP TABLE public.comment;
       public         heap 
   nocturndev    false            �            1259    16450    recipes    TABLE       CREATE TABLE public.recipes (
    id integer NOT NULL,
    title character varying(30),
    ingredients character varying,
    recipe_picture character varying,
    recipe_video character varying,
    user_id integer,
    created_at timestamp without time zone
);
    DROP TABLE public.recipes;
       public         heap 
   nocturndev    false            �            1259    16449    recipes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.recipes_id_seq;
       public       
   nocturndev    false    213                       0    0    recipes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;
          public       
   nocturndev    false    212            �            1259    16446    user_profile    TABLE     �   CREATE TABLE public.user_profile (
    user_id integer,
    name character varying(50),
    phonenumber character varying(13),
    profile_picture character varying(100)
);
     DROP TABLE public.user_profile;
       public         heap 
   nocturndev    false            �            1259    16440    users    TABLE     |   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(30),
    password character varying(16)
);
    DROP TABLE public.users;
       public         heap 
   nocturndev    false            �            1259    16439    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       
   nocturndev    false    210                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public       
   nocturndev    false    209            j           2604    16453 
   recipes id    DEFAULT     h   ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);
 9   ALTER TABLE public.recipes ALTER COLUMN id DROP DEFAULT;
       public       
   nocturndev    false    213    212    213            i           2604    16443    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       
   nocturndev    false    210    209    210            �          0    16458    comment 
   TABLE DATA           >   COPY public.comment (recipe_id, user_id, comment) FROM stdin;
    public       
   nocturndev    false    214   a       �          0    16450    recipes 
   TABLE DATA           l   COPY public.recipes (id, title, ingredients, recipe_picture, recipe_video, user_id, created_at) FROM stdin;
    public       
   nocturndev    false    213   �       �          0    16446    user_profile 
   TABLE DATA           S   COPY public.user_profile (user_id, name, phonenumber, profile_picture) FROM stdin;
    public       
   nocturndev    false    211   ,       �          0    16440    users 
   TABLE DATA           4   COPY public.users (id, email, password) FROM stdin;
    public       
   nocturndev    false    210   �                  0    0    recipes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.recipes_id_seq', 18, true);
          public       
   nocturndev    false    212            	           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 32, true);
          public       
   nocturndev    false    209            n           2606    16457    recipes recipes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_pkey;
       public         
   nocturndev    false    213            l           2606    16445    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         
   nocturndev    false    210            �      x�3�4��H�ˮ�/U�2E���qqq �a�      �   �  x��Tێ�F}��(�S"y�Ѐ���(R6�b훥Q�{qh�dv���%_�����^��hf�qq�rΩ�k���u]�@�1԰�Z�j���+q��a���F30��E�䈻��>�j4��_�%���T���Zie�In�P�\��?�׊ �n'X���'-nʩ��c�N�Wlh��iM>t}�4Hs�g�KW|�E��<L�G4
~U-5:�څv���SgK��l�qM_��1���'��-`�m��pD �!����^�PuV����Lo��|��'%iG�ʞtW05�FV���'`��3~�������PƖ�*�+�l���3|�
]ao��	�4E�l)v=�S���"��y��.���Je��Fm��wh��yOo}筇�ړ�/j/�1j�P�:X>�B���ⷎL ��o��~��uҖr;��N��9�<��q�rk5�x��(˳0=��\�v�rŅ9�x����Z�hY�`��C*�--���#���̽��&�̍�h	�8�c�S��:~��H�8MB����;�3��;��|��Jo���ʟ��?=o��s�yl3����]��V\Dq��,X˲�&� �i %�ԕr4�ݠԕ�E����#�(�5����ه�be,�l�O�4��o���8�v�tnx�g�6���Aց�8������μpo�e��"0����� +�M��h�A�+P�J�F�q���cQ�X��T��-=��wQΝ�Yr%xTdy��o�_�$�9��]T��!Yv�rRb�ܣ��lU�ٰL�e�D.�y���a���_��UD�	U)��R\t\&I�Y�Q��>�Ja�����jT�}n���~����.3��A~��eM�4&�b���H��AD~�~��r�c�n(�I�"�Da�)o[J      �   �   x�m�K� @�p
O@>�^�x 6����E����mcF2!�^f���j�5�Lz픇`���v*c:�c�����s��Cn������2	J������hj�j�kj� F��!�@z�)��Y�f���u����v�1�c��a�B-1Ɵ��\ơ�k��ee��sȽ��Xw��,��      �   x   x���=
BAE�z�����s	.�&� ���
]����͹�祿c<�^���t�}[/���O�,��y����D	�d��]v�=d}�8#�1 ���� �"�E(B�P�"�4���P���>��C     