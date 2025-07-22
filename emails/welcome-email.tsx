import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Hr,
    Tailwind,
    pixelBasedPreset,
} from "@react-email/components";
import { APP_NAME } from "@/lib/constants";

interface WelcomeEmailProps {
    name: string;
}

const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
    name = name || "John Doe";
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>{`Welcome to ${APP_NAME}!`}</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>
                Welcome to {APP_NAME}, {name}! We're thrilled to have you on
                board.
            </Preview>
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            colors: {
                                brand: "#3b82f6",
                            },
                        },
                    },
                }}
            >
                <Section className="max-w-[600px] mx-auto p-[32px_24px] font-sans rounded-lg">
                    <Row>
                        <Heading
                            as="h2"
                            className="font-semibold text-gray-800 m-0"
                        >
                            Hey, {name}!
                        </Heading>
                    </Row>

                    <Row>
                        <Text className="text-gray-600 leading-[1.6]">
                            Thank you for joining {APP_NAME}! We're excited to
                            have you as part of our community. With our powerful
                            tools, you'll be able to build, scale, and innovate
                            like never before.
                        </Text>
                        <Text className="text-gray-600 leading-[1.6]">
                            Get started by exploring your dashboard, setting up
                            your first project, or checking out our resources to
                            make the most of your experience.
                        </Text>
                        <Text className="text-gray-600 leading-[1.6]">
                            If you have any questions or problems, just reply
                            and we'll get right back to you. Let's create
                            something amazing together!
                        </Text>
                    </Row>

                    <Hr className="border-none border-t border-gray-200 my-[32px]" />

                    <Row>
                        <Text className="text-[12px] text-gray-500 my-[4px] leading-[1.4]">
                            Best regards,
                            <br />
                            The {APP_NAME} Team
                        </Text>
                        <Text className="text-[12px] text-gray-500 my-[4px] leading-[1.4]">
                            © {new Date().getFullYear()} {APP_NAME}. All rights
                            reserved.
                        </Text>
                    </Row>
                </Section>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
